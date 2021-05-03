import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1850Component } from './test-component1850.component';

describe('TestComponent1850Component', () => {
  let component: TestComponent1850Component;
  let fixture: ComponentFixture<TestComponent1850Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1850Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
