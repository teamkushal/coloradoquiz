import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3590Component } from './test-component3590.component';

describe('TestComponent3590Component', () => {
  let component: TestComponent3590Component;
  let fixture: ComponentFixture<TestComponent3590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3590Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
