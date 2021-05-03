import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1890Component } from './test-component1890.component';

describe('TestComponent1890Component', () => {
  let component: TestComponent1890Component;
  let fixture: ComponentFixture<TestComponent1890Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1890Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
