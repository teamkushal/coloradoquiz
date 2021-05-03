import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3434Component } from './test-component3434.component';

describe('TestComponent3434Component', () => {
  let component: TestComponent3434Component;
  let fixture: ComponentFixture<TestComponent3434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3434Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
