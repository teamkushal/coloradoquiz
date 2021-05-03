import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1193Component } from './test-component1193.component';

describe('TestComponent1193Component', () => {
  let component: TestComponent1193Component;
  let fixture: ComponentFixture<TestComponent1193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
