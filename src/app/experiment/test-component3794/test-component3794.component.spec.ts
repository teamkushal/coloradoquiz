import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3794Component } from './test-component3794.component';

describe('TestComponent3794Component', () => {
  let component: TestComponent3794Component;
  let fixture: ComponentFixture<TestComponent3794Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3794Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
