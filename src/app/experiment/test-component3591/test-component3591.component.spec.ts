import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3591Component } from './test-component3591.component';

describe('TestComponent3591Component', () => {
  let component: TestComponent3591Component;
  let fixture: ComponentFixture<TestComponent3591Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3591Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
