import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3535Component } from './test-component3535.component';

describe('TestComponent3535Component', () => {
  let component: TestComponent3535Component;
  let fixture: ComponentFixture<TestComponent3535Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3535Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
