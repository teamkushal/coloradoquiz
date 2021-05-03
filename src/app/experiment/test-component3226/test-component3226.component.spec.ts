import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3226Component } from './test-component3226.component';

describe('TestComponent3226Component', () => {
  let component: TestComponent3226Component;
  let fixture: ComponentFixture<TestComponent3226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
