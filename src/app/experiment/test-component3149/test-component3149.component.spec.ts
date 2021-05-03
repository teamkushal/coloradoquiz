import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3149Component } from './test-component3149.component';

describe('TestComponent3149Component', () => {
  let component: TestComponent3149Component;
  let fixture: ComponentFixture<TestComponent3149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
