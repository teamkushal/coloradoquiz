import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3107Component } from './test-component3107.component';

describe('TestComponent3107Component', () => {
  let component: TestComponent3107Component;
  let fixture: ComponentFixture<TestComponent3107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
