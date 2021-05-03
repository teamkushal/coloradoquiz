import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1935Component } from './test-component1935.component';

describe('TestComponent1935Component', () => {
  let component: TestComponent1935Component;
  let fixture: ComponentFixture<TestComponent1935Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1935Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
