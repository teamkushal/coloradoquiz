import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1508Component } from './test-component1508.component';

describe('TestComponent1508Component', () => {
  let component: TestComponent1508Component;
  let fixture: ComponentFixture<TestComponent1508Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1508Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
