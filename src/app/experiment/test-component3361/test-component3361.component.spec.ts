import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3361Component } from './test-component3361.component';

describe('TestComponent3361Component', () => {
  let component: TestComponent3361Component;
  let fixture: ComponentFixture<TestComponent3361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3361Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
