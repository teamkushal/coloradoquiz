import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent666Component } from './test-component666.component';

describe('TestComponent666Component', () => {
  let component: TestComponent666Component;
  let fixture: ComponentFixture<TestComponent666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent666Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
