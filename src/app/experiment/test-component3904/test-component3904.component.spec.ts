import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3904Component } from './test-component3904.component';

describe('TestComponent3904Component', () => {
  let component: TestComponent3904Component;
  let fixture: ComponentFixture<TestComponent3904Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3904Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
