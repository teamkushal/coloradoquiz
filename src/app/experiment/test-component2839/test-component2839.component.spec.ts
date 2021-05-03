import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2839Component } from './test-component2839.component';

describe('TestComponent2839Component', () => {
  let component: TestComponent2839Component;
  let fixture: ComponentFixture<TestComponent2839Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2839Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
