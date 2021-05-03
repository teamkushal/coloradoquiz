import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3024Component } from './test-component3024.component';

describe('TestComponent3024Component', () => {
  let component: TestComponent3024Component;
  let fixture: ComponentFixture<TestComponent3024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
