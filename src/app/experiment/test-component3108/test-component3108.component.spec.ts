import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3108Component } from './test-component3108.component';

describe('TestComponent3108Component', () => {
  let component: TestComponent3108Component;
  let fixture: ComponentFixture<TestComponent3108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
