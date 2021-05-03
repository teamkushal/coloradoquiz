import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3490Component } from './test-component3490.component';

describe('TestComponent3490Component', () => {
  let component: TestComponent3490Component;
  let fixture: ComponentFixture<TestComponent3490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3490Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
