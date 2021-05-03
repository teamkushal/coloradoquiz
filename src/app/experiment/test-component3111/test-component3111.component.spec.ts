import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3111Component } from './test-component3111.component';

describe('TestComponent3111Component', () => {
  let component: TestComponent3111Component;
  let fixture: ComponentFixture<TestComponent3111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
