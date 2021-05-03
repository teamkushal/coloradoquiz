import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent125Component } from './test-component125.component';

describe('TestComponent125Component', () => {
  let component: TestComponent125Component;
  let fixture: ComponentFixture<TestComponent125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
