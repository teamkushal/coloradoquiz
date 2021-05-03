import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1034Component } from './test-component1034.component';

describe('TestComponent1034Component', () => {
  let component: TestComponent1034Component;
  let fixture: ComponentFixture<TestComponent1034Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1034Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
