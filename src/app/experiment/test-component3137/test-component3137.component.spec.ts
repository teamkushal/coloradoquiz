import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3137Component } from './test-component3137.component';

describe('TestComponent3137Component', () => {
  let component: TestComponent3137Component;
  let fixture: ComponentFixture<TestComponent3137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
