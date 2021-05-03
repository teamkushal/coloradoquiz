import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1897Component } from './test-component1897.component';

describe('TestComponent1897Component', () => {
  let component: TestComponent1897Component;
  let fixture: ComponentFixture<TestComponent1897Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1897Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
