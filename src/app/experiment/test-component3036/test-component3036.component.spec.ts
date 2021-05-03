import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3036Component } from './test-component3036.component';

describe('TestComponent3036Component', () => {
  let component: TestComponent3036Component;
  let fixture: ComponentFixture<TestComponent3036Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3036Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
