import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1832Component } from './test-component1832.component';

describe('TestComponent1832Component', () => {
  let component: TestComponent1832Component;
  let fixture: ComponentFixture<TestComponent1832Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1832Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
