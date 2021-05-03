import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent410Component } from './test-component410.component';

describe('TestComponent410Component', () => {
  let component: TestComponent410Component;
  let fixture: ComponentFixture<TestComponent410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
