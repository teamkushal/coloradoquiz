import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1904Component } from './test-component1904.component';

describe('TestComponent1904Component', () => {
  let component: TestComponent1904Component;
  let fixture: ComponentFixture<TestComponent1904Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1904Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
