import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1216Component } from './test-component1216.component';

describe('TestComponent1216Component', () => {
  let component: TestComponent1216Component;
  let fixture: ComponentFixture<TestComponent1216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
