import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1375Component } from './test-component1375.component';

describe('TestComponent1375Component', () => {
  let component: TestComponent1375Component;
  let fixture: ComponentFixture<TestComponent1375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1375Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
