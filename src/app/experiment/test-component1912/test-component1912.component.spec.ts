import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1912Component } from './test-component1912.component';

describe('TestComponent1912Component', () => {
  let component: TestComponent1912Component;
  let fixture: ComponentFixture<TestComponent1912Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1912Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
