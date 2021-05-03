import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3262Component } from './test-component3262.component';

describe('TestComponent3262Component', () => {
  let component: TestComponent3262Component;
  let fixture: ComponentFixture<TestComponent3262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3262Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
