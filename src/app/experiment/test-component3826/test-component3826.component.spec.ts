import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3826Component } from './test-component3826.component';

describe('TestComponent3826Component', () => {
  let component: TestComponent3826Component;
  let fixture: ComponentFixture<TestComponent3826Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3826Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
