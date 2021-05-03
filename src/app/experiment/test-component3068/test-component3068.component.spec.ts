import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3068Component } from './test-component3068.component';

describe('TestComponent3068Component', () => {
  let component: TestComponent3068Component;
  let fixture: ComponentFixture<TestComponent3068Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3068Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
