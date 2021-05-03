import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1880Component } from './test-component1880.component';

describe('TestComponent1880Component', () => {
  let component: TestComponent1880Component;
  let fixture: ComponentFixture<TestComponent1880Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1880Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
