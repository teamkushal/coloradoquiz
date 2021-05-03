import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2888Component } from './test-component2888.component';

describe('TestComponent2888Component', () => {
  let component: TestComponent2888Component;
  let fixture: ComponentFixture<TestComponent2888Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2888Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
