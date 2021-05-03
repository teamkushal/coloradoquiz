import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2064Component } from './test-component2064.component';

describe('TestComponent2064Component', () => {
  let component: TestComponent2064Component;
  let fixture: ComponentFixture<TestComponent2064Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2064Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
