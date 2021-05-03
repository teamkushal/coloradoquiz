import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3340Component } from './test-component3340.component';

describe('TestComponent3340Component', () => {
  let component: TestComponent3340Component;
  let fixture: ComponentFixture<TestComponent3340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
