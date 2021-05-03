import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3037Component } from './test-component3037.component';

describe('TestComponent3037Component', () => {
  let component: TestComponent3037Component;
  let fixture: ComponentFixture<TestComponent3037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3037Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
