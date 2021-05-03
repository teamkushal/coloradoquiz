import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1445Component } from './test-component1445.component';

describe('TestComponent1445Component', () => {
  let component: TestComponent1445Component;
  let fixture: ComponentFixture<TestComponent1445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1445Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
