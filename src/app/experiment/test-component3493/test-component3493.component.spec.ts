import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3493Component } from './test-component3493.component';

describe('TestComponent3493Component', () => {
  let component: TestComponent3493Component;
  let fixture: ComponentFixture<TestComponent3493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3493Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
