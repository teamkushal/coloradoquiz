import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent351Component } from './test-component351.component';

describe('TestComponent351Component', () => {
  let component: TestComponent351Component;
  let fixture: ComponentFixture<TestComponent351Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent351Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
