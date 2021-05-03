import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3099Component } from './test-component3099.component';

describe('TestComponent3099Component', () => {
  let component: TestComponent3099Component;
  let fixture: ComponentFixture<TestComponent3099Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3099Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
