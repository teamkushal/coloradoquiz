import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3999Component } from './test-component3999.component';

describe('TestComponent3999Component', () => {
  let component: TestComponent3999Component;
  let fixture: ComponentFixture<TestComponent3999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
