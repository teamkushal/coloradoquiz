import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3890Component } from './test-component3890.component';

describe('TestComponent3890Component', () => {
  let component: TestComponent3890Component;
  let fixture: ComponentFixture<TestComponent3890Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3890Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
