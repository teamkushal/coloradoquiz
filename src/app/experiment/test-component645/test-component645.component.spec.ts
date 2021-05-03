import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent645Component } from './test-component645.component';

describe('TestComponent645Component', () => {
  let component: TestComponent645Component;
  let fixture: ComponentFixture<TestComponent645Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent645Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
