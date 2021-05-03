import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3396Component } from './test-component3396.component';

describe('TestComponent3396Component', () => {
  let component: TestComponent3396Component;
  let fixture: ComponentFixture<TestComponent3396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3396Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
