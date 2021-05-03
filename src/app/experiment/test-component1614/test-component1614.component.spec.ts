import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1614Component } from './test-component1614.component';

describe('TestComponent1614Component', () => {
  let component: TestComponent1614Component;
  let fixture: ComponentFixture<TestComponent1614Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1614Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
