import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent216Component } from './test-component216.component';

describe('TestComponent216Component', () => {
  let component: TestComponent216Component;
  let fixture: ComponentFixture<TestComponent216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
