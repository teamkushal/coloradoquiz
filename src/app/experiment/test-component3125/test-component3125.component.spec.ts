import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3125Component } from './test-component3125.component';

describe('TestComponent3125Component', () => {
  let component: TestComponent3125Component;
  let fixture: ComponentFixture<TestComponent3125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
