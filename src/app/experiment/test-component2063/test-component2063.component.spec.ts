import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2063Component } from './test-component2063.component';

describe('TestComponent2063Component', () => {
  let component: TestComponent2063Component;
  let fixture: ComponentFixture<TestComponent2063Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2063Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
