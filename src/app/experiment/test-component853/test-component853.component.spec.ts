import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent853Component } from './test-component853.component';

describe('TestComponent853Component', () => {
  let component: TestComponent853Component;
  let fixture: ComponentFixture<TestComponent853Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent853Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
